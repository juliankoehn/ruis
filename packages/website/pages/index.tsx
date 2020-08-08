import React from 'react';
import { Head, Navigation } from '../components';
import { Container, Heading, Paragraph, Button } from '@ruids/components';

export const index = () => {
  return (
    <React.Fragment>
      <Head title="home" description="homepage" />
      <Navigation />

      <Container>
        <div className="flex my-4 justify-center">
          <div className="w-64 -mx-auto bg-gray-500 ">
            <div className="mb-4">
              <Heading size="3xl">
                React Universal Interface Design System
              </Heading>
              <Paragraph>
                A suite of React components, sensible UI design, and a friendly
                development experience.
              </Paragraph>
            </div>
            <div className="pt-4">
              <Button>Getting started</Button>
              <Button buttonType="muted">Components</Button>
            </div>
          </div>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default index;
