interface Promise<DocsPageProps> {
  params: { slug: string[] };
}

export default async function docs({ params }:Promise<DocsPageProps>) {
  const { slug } =  await params;

  console.log(slug);
  return (
    <div>
      {slug.length >= 2 ? `viewing all routes for catch all segments` : 'Welcome to the documentation'}

    </div>
  );
}

//sample catch all segments in RSC