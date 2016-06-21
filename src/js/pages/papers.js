import React from 'react';
import { Page } from '../components/chips/page/page';
import { IconButton } from '../components/chips/buttons/buttons';
import { Paper, ExpansionPaper } from '../components/chips/papers/papers';

class Papers extends React.Component {
  render() {
    return (
      <Page title="Papers">

        <div style={{ padding: '2rem' }}>
          <h3>Paper</h3>
          <Paper>
            <span>This is a resting paper</span>
          </Paper>
        </div>

        <div style={{ padding: '2rem' }}>
          <Paper className="raised">
            <span>This is a raised paper</span>
          </Paper>
        </div>

        <div style={{ padding: '2rem' }}>
          <h3>Expansion Paper</h3>
          <ExpansionPaper>
            <div className="fixed animated flex centred">This is a extensible paper</div>
            <div className="collapsable">Content</div>
          </ExpansionPaper>
        </div>

      </Page>
    )
  }
}

export default Papers;
