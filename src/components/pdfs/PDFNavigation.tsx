'use client';
import { useRouter } from 'next/navigation';

export const PDFNavigation = ({slug}: {slug: string}) => {
  const router = useRouter();

  return (
    <select
      className="mb-4"
      onChange={(e) => router.push(`/pdf-test/${e.target.value}`)}
      value={slug}
    >
      <option value="primaryApplication">Primary Application</option>
      <option value="roi">Release Of Information</option>
      <option value="afterSchoolProgram">After School Program</option>
      <option value="sst">Student Support Teacher Services</option>
      <option value="medicationAdministration">Medication Administration Authorization</option>
      <option value="postSecondaryServices">Post-Secondary Services</option>
    </select>
  );
}