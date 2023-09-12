'use client';
import { useState } from 'react';
import { Button } from '../Button';
import { SocialLink } from '@/types';
import { PLATFORMS } from '@/constants';
import { LinkForm } from '../LinkForm';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  onChange: (links: SocialLink[]) => void;
  list: SocialLink[];
};

const LinkCustomizer = ({ list, onChange }: Props) => {
  const handleAdd = () =>
    onChange([
      {
        id: uuidv4(),
        title: `Link #${list.length + 1}`,
        platform: PLATFORMS.github,
        link: '',
      },
      ...list,
    ]);

  const handleSubmit = (id: string, data: any) => {
    const index = list.findIndex((item) => item.id === id);
    const newList = [...list];

    newList[index] = { ...newList[index], ...data };
    onChange(newList);
  };

  const handleRemove = (idToRemove: string) => {
    const newList = list.filter(({ id }) => id != idToRemove);
    onChange(newList);
  };

  const links = list.map((link) => (
    <LinkForm
      key={link.id}
      {...link}
      onSubmit={(data) => handleSubmit(link.id, data)}
      onRemove={handleRemove}
    />
  ));

  return (
    <div>
      <Button
        variant="secondary"
        label="Add new link"
        icon="add"
        onClick={handleAdd}
        alwaysShowIcon
        fullWidth
      />

      <ul className="flex flex-col gap-6 mt-6">{links}</ul>
    </div>
  );
};

export { LinkCustomizer };
