import { cn } from '@/lib/utils';

type Props = {
  className?: string;
  heading?: string;
};

export default function EmptyList({
  className,
  heading = 'No items found'
}: Props) {
  return <h2 className={cn('text-xl ', className)}>{heading}</h2>;
}
