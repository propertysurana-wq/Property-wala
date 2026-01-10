// 'use client';

// import PropertyEdit from '@/Admin/propertyedit/propertyedit';

// export default function PropertyEditPage() {
//   return <PropertyEdit/>;
// }
'use client';

import PropertyEdit from '@/Admin/propertyedit/propertyedit';
import { useParams } from 'next/navigation';

export default function PropertyEditPage() {
  const params = useParams();

  const propertyId = params?.propertyId as string;

  return <PropertyEdit propertyId={propertyId} />;
}

