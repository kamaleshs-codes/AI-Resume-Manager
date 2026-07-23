import Card from "../ui/Card";
import Button from "../ui/Button";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  onClick: () => void;
}

const FeatureCard = ({
  title,
  description,
  icon,
  buttonText,
  onClick,
}: FeatureCardProps) => {
  return (
    <Card className='flex h-full flex-col justify-between'>
      <div>
        <div className='mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary'>
          {icon}
        </div>

        <h3 className='text-xl font-semibold text-text'>{title}</h3>

        <p className='mt-3 text-sm leading-6 text-text-muted'>{description}</p>
      </div>

      <Button type='button' onClick={onClick} className='mt-6'>
        {buttonText}
      </Button>
    </Card>
  );
};

export default FeatureCard;
