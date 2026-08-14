export type NavItem = { route: string; label: string; icon: string; badge?: string };
export type NavSection = { label: string; items: NavItem[] };

export const navigation: NavSection[] = [
  { label: 'Command', items: [
    { route: 'overview', label: 'Overview', icon: '⌘' },
    { route: 'attention', label: 'Attention', icon: '△', badge: '12' },
    { route: 'live-operations', label: 'Live Operations', icon: '◉' }
  ]},
  { label: 'Cultivation', items: [
    { route: 'rooms', label: 'Rooms', icon: '▣' },
    { route: 'batches', label: 'Batches', icon: '◫' },
    { route: 'plants', label: 'Plants', icon: '❋' },
    { route: 'crop-intelligence', label: 'Crop Intelligence', icon: '◎' },
    { route: 'yield-forecast', label: 'Yield & Forecast', icon: '↗' }
  ]},
  { label: 'Process', items: [
    { route: 'operations', label: 'Operations', icon: '☷' },
    { route: 'sops-workflows', label: 'SOPs & Workflows', icon: '⇉' },
    { route: 'deviations', label: 'Deviations', icon: '△' },
    { route: 'capa', label: 'CAPA', icon: '☑' },
    { route: 'interventions', label: 'Interventions', icon: '✚' }
  ]},
  { label: 'Quality', items: [
    { route: 'quality', label: 'Quality', icon: '◈' },
    { route: 'inspections', label: 'Inspections', icon: '☰' },
    { route: 'laboratory', label: 'Laboratory', icon: '⚗' },
    { route: 'contamination', label: 'Contamination', icon: '✺' }
  ]},
  { label: 'Facility', items: [
    { route: 'cameras', label: 'Cameras', icon: '◩' },
    { route: 'environment', label: 'Environment', icon: '☁' },
    { route: 'equipment', label: 'Equipment', icon: '⚙' },
    { route: 'maintenance', label: 'Maintenance', icon: '◇' }
  ]},
  { label: 'Intelligence', items: [
    { route: 'insights', label: 'Insights', icon: '✧' },
    { route: 'investigations', label: 'Investigations', icon: '⌕' },
    { route: 'comparisons', label: 'Comparisons', icon: '⇄' },
    { route: 'predictions', label: 'Predictions', icon: '◌' }
  ]},
  { label: 'Performance', items: [
    { route: 'kpis', label: 'KPIs', icon: '◔' },
    { route: 'improvements', label: 'Improvements', icon: '⬈' },
    { route: 'resources', label: 'Resources', icon: '◍' },
    { route: 'reliability', label: 'Reliability', icon: '⦿' }
  ]},
  { label: 'Value', items: [
    { route: 'verified-benefit', label: 'Verified Benefit', icon: '$' },
    { route: 'roi', label: 'ROI', icon: '◎' },
    { route: 'improvement-portfolio', label: 'Improvement Portfolio', icon: '▤' }
  ]},
  { label: 'Evidence', items: [
    { route: 'evidence-explorer', label: 'Evidence Explorer', icon: '☍' },
    { route: 'timeline', label: 'Timeline', icon: '⋮' },
    { route: 'reports', label: 'Reports', icon: '▧' }
  ]},
  { label: 'System', items: [
    { route: 'data-health', label: 'Data Health', icon: '☰' },
    { route: 'integrations', label: 'Integrations', icon: '⤳' },
    { route: 'users', label: 'Users', icon: '☺' },
    { route: 'settings', label: 'Settings', icon: '⚙' }
  ]}
];
