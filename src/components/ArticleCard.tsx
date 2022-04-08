import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import useDevice, { DeviceBreakpoint } from '@/hooks/useDevice';

import SvgIcon from '@/assets/icons';
import { ArticleContext } from '@/contexts/ArticleProvider';
import { Button, ButtonIcon } from '@/ui/button';
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogTitle,
   AlertDialogTrigger,
} from '@/ui/button-dialog';
import { Card, CardBody, CardOverlay } from '@/ui/card';
import { ImageWrapper } from '@/ui/image';
import { H2 } from '@/ui/typography';
import { Spacer } from '@/ui/utils';
import { articleUrl } from '@/utils/articleUrl';
import { imageUrl } from '@/utils/imageUrl';

import { IArticle } from '@/types/IArticle';

type Props = {
   article: IArticle;
   imagePriority?: boolean;
};

const ArticleCard: React.FC<Props> = ({ article, imagePriority = false }) => {
   const { setRemovedArticles } = React.useContext(ArticleContext);

   const handleDeleteClick = () => {
      setRemovedArticles((previous) => [...previous, article.slug]);
   };

   const device = useDevice();

   return (
      <Card>
         <CardOverlay>
            <AlertDialog>
               <AlertDialogTrigger asChild>
                  <ButtonIcon showOnHover>
                     <SvgIcon name='close' fill='white' />
                  </ButtonIcon>
               </AlertDialogTrigger>
               <AlertDialogContent>
                  <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                     This action will remove the article from your results. You
                     can always switch back by clicking the <b>Refetch</b>{' '}
                     button
                  </AlertDialogDescription>
                  <AlertDialogCancel asChild>
                     <Button color='secondary' css={{ marginRight: 25 }}>
                        Cancel
                     </Button>
                  </AlertDialogCancel>
                  <AlertDialogAction asChild onClick={handleDeleteClick}>
                     <Button color='primary'>Yes, delete the article</Button>
                  </AlertDialogAction>
               </AlertDialogContent>
            </AlertDialog>
         </CardOverlay>
         <ImageWrapper>
            <Link href={articleUrl(article.slug)} passHref>
               <a target='_blank' tabIndex={-1}>
                  {/* tabIndex={-1} - Optional -- Seems more accessible on titles & buttons */}
                  <Image
                     priority={imagePriority}
                     width={device === DeviceBreakpoint.MOBILE ? 300 : 350}
                     height={device === DeviceBreakpoint.MOBILE ? 240 : 180}
                     layout='responsive'
                     alt={article.title}
                     src={imageUrl(article.post_image)}
                     objectFit='cover'
                     loading={imagePriority ? 'eager' : 'lazy'}
                  />
               </a>
            </Link>
         </ImageWrapper>
         <CardBody>
            <Link href={articleUrl(article.slug)} passHref>
               <H2 target='_blank' as='a'>
                  {article.title}
               </H2>
            </Link>
            <Spacer size={3} />
            <Link href={articleUrl(article.slug)} passHref>
               <Button
                  color='secondary'
                  css={{ marginTop: 'auto' }}
                  as='a'
                  fullWidth
               >
                  Full article
               </Button>
            </Link>
         </CardBody>
      </Card>
   );
};

export default ArticleCard;
