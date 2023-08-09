import { cn } from '~/lib/utils';

export default function Button({ className, ...props }) {
  return <button className={cn('', className, {})} {...props} />;
}
