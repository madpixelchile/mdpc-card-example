import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Card, Title } from '../dist/components/index';

const App = () => {
  return (

    <Card>
      {
        (args) => (
          <>
            <Title className={'text--title'} title={'Juan Escudero'} />
            <span>{JSON.stringify(args.count)}</span>
          </>
        )
      }
    </Card>

  );
};

ReactDOM.render(<App />, document.getElementById('root'));
