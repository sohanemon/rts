import { cn } from '~/lib/utils';

export default function Button({ className = '', children }) {
  return <button className={cn('', {}, className)}>{children}</button>;
}
