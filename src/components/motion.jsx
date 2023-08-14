'use client';

import { Slot } from '@radix-ui/react-slot';
import { motion } from 'framer-motion';
import { forwardRef, useId } from 'react';

import { defaultVariants } from '~/config/variants';

const Component = forwardRef(({ variants, as, asChild, ...props }, ref) => {
  const Comp = asChild ? Slot : as || 'div';
  return <Comp ref={ref} {...props} />;
});

Component.displayName = 'Motion';
const MotionComponent = motion(Component);

// eslint-disable-next-line react/display-name
const withVariants = (Comp) => (props) => {
  const id = useId();
  return (
    <Comp
      key={props.key || id}
      variants={defaultVariants}
      whileInView={props.whileInView || 'visible'}
      viewport={{ once: !props.always }}
      transition={{
        delay: 0.1,
        duration: 0.4,
        type: 'tween',
        ...props.transition,
      }}
      {...props}
    />
  );
};

const Motion = withVariants(MotionComponent);

export default Motion;
