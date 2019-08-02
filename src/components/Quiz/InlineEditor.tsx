import * as monacoEditor from 'monaco-editor/esm/vs/editor/editor.api';
import React from 'react';
import MonacoEditor, { EditorDidMount, MonacoEditorProps } from 'react-monaco-editor';

const LINE_HEIGHT = 18;
const DEFAULT_STATE = {
    editor: undefined as unknown as monacoEditor.editor.ICodeEditor,
    prevLineCount: -1
}

export default class InlineMonacoEditor extends React.Component<MonacoEditorProps, typeof DEFAULT_STATE> {
    constructor(props: MonacoEditorProps) {
        super(props);
        this.setEditorHeight = this.setEditorHeight.bind(this);
        this.state = DEFAULT_STATE;
    }

    componentWillUnmount() {
        if (window) {
            window.removeEventListener('resize', this.setEditorHeight);
        }
    }

    render() {
        const { options = {}, editorDidMount } = this.props;

        // override a word wrapping, disable and hide the scroll bars
        const optionsOverride = {
            ...options,
            wordWrap: 'on',
            scrollBeyondLastLine: false,
            scrollbar: {
                vertical: 'hidden',
                horizontal: 'hidden',
            },
        } as monacoEditor.editor.IEditorConstructionOptions;

        return (
            <MonacoEditor
                {...this.props}
                editorDidMount={this.editorDidMount(editorDidMount)}
                options={optionsOverride} />
        );
    }

    private editorDidMount(prevEditorDidMount: EditorDidMount | undefined): EditorDidMount {
        return (editor, monaco) => {
            // chain an pre-existing editorDidMount handler
            if (prevEditorDidMount) {
                prevEditorDidMount(editor, monaco);
            }

            // put the edit in the state for the handler.
            this.setState({ editor });

            // do the initial set of the height (wait a bit)
            setTimeout(this.setEditorHeight, 0);

            // adjust height when the window resizes
            if (window) {
                window.addEventListener("resize", this.setEditorHeight);
            }

            // on each edit recompute height (wait a bit)
            editor.onDidChangeModelDecorations(() => {
                setTimeout(this.setEditorHeight, 0)
            });
        };
    }

    setEditorHeight() {
        const { editor, prevLineCount } = this.state;
        if (!editor) { return; }
        const editorDomNode = editor.getDomNode();
        if (!editorDomNode) { return; }
        const container = editorDomNode.getElementsByClassName('view-lines')[0] as HTMLElement;
        const containerHeight = container.offsetHeight;
        const lineHeight = container.firstChild
            ? (container.firstChild as HTMLElement).offsetHeight
            : LINE_HEIGHT;

        if (!containerHeight) {
            // dom hasn't finished settling down. wait a bit more.
            setTimeout(this.setEditorHeight, 0);
        } else {
            const currLineCount = container.childElementCount;
            const nextHeight = (prevLineCount > currLineCount)
                // if line count is shrinking monaco tends to leave the extra
                // space at the end, compute the height from the line count
                ? currLineCount * lineHeight
                // otherwise use the height of the container div as the height
                // of the editor node
                : containerHeight;

            // set the height and redo layout
            editorDomNode.style.height = nextHeight + 'px';
            editor.layout();

            // double check that layout didn't change things too much
            if (container.childElementCount !== currLineCount) {
                this.setEditorHeight();
            } else {
                this.setState({ prevLineCount: currLineCount })
            }
        }
    };
}