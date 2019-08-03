import createCourse from "components/Course/create";
import Welcome from 'steps/Welcome';
import SetupIdentity from 'steps/SetupIdentity';
import SetupChannel from 'steps/SetupChannel';
import InviteAlice from 'steps/InviteAlice';
import Done from 'steps/Done';

const GettingStarted = createCourse({
  steps: [{
    id: 'welcome',
    screen: Welcome,
  }, {
    id: 'setup-idenity',
    screen: SetupIdentity,
  }, {
    id: 'setup-channel',
    screen: SetupChannel,
  }, {
    id: 'invite-alice',
    screen: InviteAlice,
  }, {
    id: 'done',
    screen: Done,
  }],
});

export default GettingStarted;