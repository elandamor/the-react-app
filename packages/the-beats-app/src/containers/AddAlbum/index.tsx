import { Form, MultiStep, ScrollView } from '@elandamor/tra-components';
import React, { FC } from 'react';
import { General, Tracks } from './components';

const INITIAL_VALUES = {
  name: '',
  artist: '',
  releaseType: undefined,
  genre: undefined,
  tracks: [],
};

/**
 * @render react
 * @name AddAlbum component
 * @description AddAlbum component.
 * @example
 * <AddAlbum />
 */

const AddAlbum: FC = () => (
  <ScrollView padding={2}>
    <Form
      name="add-album"
      onSubmit={() => null}
      initialValues={INITIAL_VALUES}
      persist={true}
    >
      <MultiStep
        showTracks={false}
        steps={[
          {
            name: 'General',
            component: <General />,
          },
          {
            name: 'Tracks',
            component: <Tracks />,
          },
        ]}
      />
    </Form>
  </ScrollView>
);

export default AddAlbum;