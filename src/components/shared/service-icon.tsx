import {
  Activity,
  Bandage,
  Bone,
  ClipboardCheck,
  ClipboardList,
  Droplet,
  Droplets,
  FlaskConical,
  Flower,
  Flower2,
  HeartPulse,
  Pill,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  Syringe,
  Truck,
  Users,
  Wind,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

// Mapa curado: solo los iconos que usan los servicios (evita importar
// toda la librería y conserva el tree-shaking).
const ICONS: Record<string, LucideIcon> = {
  Stethoscope,
  ClipboardCheck,
  ShieldCheck,
  Droplets,
  Activity,
  FlaskConical,
  ScanLine,
  Flower2,
  Users,
  Syringe,
  Bandage,
  HeartPulse,
  Wind,
  Droplet,
  Flower,
  Truck,
  ClipboardList,
  Bone,
  Pill,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Stethoscope;
  return <Icon className={cn("h-6 w-6", className)} aria-hidden="true" />;
}
