import { useQuery } from '@apollo/react-hooks';
import { Box, Flex, Loader, Routes, Text } from '@app/components';
import React, { FC } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { GET_ALBUMS } from '../../graphql';

/**
 * @render react
 * @name GetAlbums component
 * @description GetAlbums component.
 * @example
 * <GetAlbums />
 */

const GetAlbums: FC<RouteComponentProps & { routes?: any[] }> = ({
  match,
  routes,
}) => {
  const {
    data: getAlbumsData,
    error: getAlbumsError,
    loading: getAlbumsLoading,
  } = useQuery(GET_ALBUMS);

  const albums = getAlbumsData?.albums?.edges || [];

  const renderAlbums = (albums: any[]) => {
    if (getAlbumsLoading) {
      return <Loader />;
    }

    if (getAlbumsError) {
      console.error({ getAlbumsError });
      return <Text>There was an error fetching albums.</Text>;
    }

    if (!albums || albums.length < 1) {
      return <Text>Albums in your library will appear here.</Text>;
    }

    if (match.isExact) {
      return (
        <React.Fragment>
          <Box>
            {albums.map(({ node }: any) => (
              <Flex key={node.id} alignItems="center">
                <Link to={`/library/albums/${node.id}`}>
                  <Text mb="2">{node.name}</Text>
                </Link>
              </Flex>
            ))}
          </Box>
        </React.Fragment>
      );
    }

    return routes ? <Routes routes={routes} /> : null;
  };

  return <Box>{renderAlbums(albums)}</Box>;
};

export default GetAlbums;
