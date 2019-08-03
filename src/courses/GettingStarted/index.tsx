import Welcome from './Welcome';
import SetupIdentity from './SetupIdentity';
import SetupChannel from './SetupChannel';
import SharingYourKey from './SharingYourKey';
import InviteAlice from './InviteAlice';
import GettingMessages from './GettingMessages';
import SendingMessages from './SendingMessages';
import Done from './Done';
import { StepDescription } from 'screens/Course/types';

const steps: StepDescription[] = [{
  id: 'welcome',
  screen: Welcome,
}, {
  id: 'setup-idenity',
  screen: SetupIdentity,
}, {
  id: 'setup-channel',
  screen: SetupChannel,
}, {
  id: 'sharing-your-key',
  screen: SharingYourKey,
}, {
  id: 'invite-alice',
  screen: InviteAlice,
}, {
  id: 'getting-messages',
  screen: GettingMessages,
}, {
  id: 'sending-messages',
  screen: SendingMessages,
}, {
  id: 'done',
  screen: Done,
}];

export default steps;