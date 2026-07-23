import Card from "../ui/Card";

interface StatsCardProps {
  title: string;
  value: number | string;
  icon: React.ReactNode;
}

const StatsCard = ({ title, value, icon }: StatsCardProps) => {
  return (
    <Card className='flex items-center gap-4'>
      <div className='flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary'>
        {icon}
      </div>

      <div>
        <p className='text-sm text-text-muted'>{title}</p>

        <h3 className='mt-1 text-3xl font-bold text-text'>{value}</h3>
      </div>
    </Card>
  );
};

export default StatsCard;
