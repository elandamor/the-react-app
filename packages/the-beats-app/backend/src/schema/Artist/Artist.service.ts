import { Artist, ArtistCreateInput } from '../../generated/prisma-client';
import { Context } from '../../typings';
import { generateAlias } from '../../utils';
import { UnknownError } from '../../utils/errors';

/**
 * Creates an artist
 * @param artist - Object of artist to create
 * @param context - Exposes prisma
 */
export const createArtist = async (artist: Artist, { prisma }: Context) => {
  const { name } = artist;
  const alias = generateAlias(name);

  const artistExists = await prisma.$exists.artist({ alias });

  if (artistExists) {
    return await prisma.artist({ alias });
  }

  const payload: ArtistCreateInput = {
    alias,
    name,
  };

  try {
    const createdArtist = await prisma.createArtist({ ...payload });

    return createdArtist;
  } catch (error) {
    throw new UnknownError({
      message: error.message,
    });
  }
};

/**
 * Creates many artists
 * @param artists - Array of artists to create
 * @param context - Exposes prisma
 */
export const createArtists = async (artists: Artist[], context: Context) => {
  if (!artists) {
    return;
  }

  if (artists.length < 1) {
    return [];
  }

  return new Promise<Array<{ id: string }>>((resolve) => {
    const createdArtists = [];

    artists.forEach((artist, index) => {
      createArtist(artist, context).then((createdArtist) => {
        createdArtists.push({ id: createdArtist.id });

        if (index === artists.length - 1) {
          resolve(createdArtists);
        }
      });
    });
  });
};