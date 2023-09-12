'use client';
import { Button } from '@/components/Button';
import { Card, CardBody, CardFooter, CardTitle } from '@/components/Card';
import { LinkCustomizer } from '@/components/LinkCustomizer';
import { Mockup } from '@/components/Mockup';
import { SocialLink } from '@/types';
import { useState } from 'react';

const Links = () => {
  const [links, setLinks] = useState<SocialLink[]>([]);

  const handleLinksChange = (links: SocialLink[]) => setLinks(links);

  return (
    <>
      <Card className="col-span-1">
        <CardBody>
          <Mockup links={links} />
        </CardBody>
      </Card>

      <Card className="col-span-2">
        <CardTitle
          title="Customize your links"
          subtitle="Add/edit/remove links below and then share all your profiles with the world!"
        />

        <CardBody>
          <LinkCustomizer list={links} onChange={handleLinksChange} />
        </CardBody>

        <CardFooter>
          <Button variant="primary" label="Save" />
        </CardFooter>
      </Card>
    </>
  );
};

export default Links;
