import { useQuery } from '@apollo/react-hooks';
import { Box, Image, Input, Loader, Select } from '@app/components';
import { logger } from '@app/utilities';
import { useFormikContext } from 'formik';
import React from 'react';
import { SingleDatePicker, Uploader } from '../../../../components';
import { genres, releaseTypes } from '../../../../data';
import { GET_ARTISTS } from '../../../../graphql';

/**
 * @render react
 * @name General component
 * @description General component.
 * @example
 * <General />
 */

const General = () => {
  const { setFieldValue, values } = useFormikContext();
  const { cover } = values as any;
  logger({ cover });

  const { data: getArtistsData } = useQuery(GET_ARTISTS);
  const artists = getArtistsData?.artists?.edges.map(({ node }: any) => ({
    label: node.name,
    value: node.id,
  }));

  return (
    <Box>
      <Box mb={2}>
        <Image src={cover?.preview} aspect={1} />
        <Box position="absolute" left={0} top={0} height="100%" width="100%">
          {cover?.preview && <Loader size="64px" />}
          <Uploader
            onFileAdded={(file) => setFieldValue('cover', file)}
            height="100%"
            width="100%"
          />
        </Box>
      </Box>
      <Input label="Name" name="name" />
      <Select label="Artist" name="artist" options={artists} />
      <SingleDatePicker
        label="Release Date"
        name="releaseDate"
        openDirection="up"
      />
      <Select label="Release Type" name="releaseType" options={releaseTypes} />
      <Select label="Genre" name="genre" options={genres} />
    </Box>
  );
};

export default General;
