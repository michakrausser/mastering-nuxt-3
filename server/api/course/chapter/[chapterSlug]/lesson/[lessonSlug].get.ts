import { PrismaClient } from '@prisma/client';
import protectRoute from '~/server/utils/protectRoute';


const prisma = new PrismaClient();

export default defineEventHandler(async ( event) => {
  // We allow users to access the first lesson without being logged in
  if ( event.context.params.chapterSlug !== '1-chapter-1' ) {
    protectRoute( event );
    console.log( 'event: ', event );
  }

  const { chapterSlug, lessonSlug } = event.context.params;

  const lesson = await prisma.lesson.findFirst({
    where: {
      slug: lessonSlug,
      Chapter: {
        slug: chapterSlug
      }
    }
  });

  if ( !lesson ) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Lesson not found'
    })
  }

  console.log( 'lesson, chapterSlug, lessonSlug: ', lesson, chapterSlug, lessonSlug );

  return {
    ...lesson,
    path: `/course/chapter/${ chapterSlug }/lesson/${ lessonSlug }`
  }
});
