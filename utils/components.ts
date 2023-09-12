import { ReactNode, isValidElement } from 'react';

export const getElementByName = (elements: ReactNode[], name: string) =>
  elements.find((child) => {
    return getComponentName(child) === name;
  });

export const getComponentName = (child: React.ReactNode) => {
  if (isValidElement(child)) {
    return (child.type as { COMPONENT_NAME?: string }).COMPONENT_NAME;
  }

  return null;
};
