import { useRouter } from 'next/router';
import { tutors } from '../../../data/tutors';
import SchedulerEmbed from '../../../components/SchedulerEmbed';

const TutorDetailPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  const tutor = tutors.find(t => t.slug === slug);

  if (!tutor) {
    return <div>Tutor not found</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">{tutor.name}</h1>
      <p className="mt-2">{tutor.bio}</p>
      {tutor.calendlyUrl && (
        <div className="mt-4">
          <h2 className="text-xl">Schedule a Session</h2>
          <SchedulerEmbed url={tutor.calendlyUrl} />
        </div>
      )}
    </div>
  );
};

export default TutorDetailPage;