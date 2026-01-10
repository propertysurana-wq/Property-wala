'use client';

import PropertyEdit from '@/Admin/propertyedit/propertyedit';
import { useParams } from 'next/navigation';

export default function PropertyEditPage() {
  const params = useParams();
  const id = params?.id as string;
  
  return <PropertyEdit propertyId={id} />;
}