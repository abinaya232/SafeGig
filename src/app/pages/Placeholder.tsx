import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Construction } from 'lucide-react';

interface PlaceholderProps {
  title: string;
  description: string;
}

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Construction className="h-6 w-6" />
            {title}
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="py-12">
          <div className="text-center text-gray-500">
            <p className="text-lg">This feature is available in the full platform.</p>
            <p className="text-sm mt-2">Navigate using the sidebar to explore other features.</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
