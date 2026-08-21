import { GraduationCap, Building2, Globe2, Award, Users, FileEdit, type LucideProps } from 'lucide-react'

const map = {
  graduation: GraduationCap,
  building: Building2,
  globe: Globe2,
  award: Award,
  people: Users,
  document: FileEdit,
}

export type IconName = keyof typeof map

export default function Icon({ name, ...props }: { name: IconName } & LucideProps) {
  const Cmp = map[name]
  return <Cmp {...props} />
}
