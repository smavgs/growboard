export type Status = 'Healthy' | 'Watch' | 'Attention' | 'Processing' | 'New' | 'Acknowledged' | 'Investigating' | 'Resolved' | 'Verified' | 'On Track' | 'In Review' | 'Complete';

export const roomStatus = [
  {name:'Flower 01', crop:'Flowering', status:'Healthy', vpd:'1.10 kPa', temp:'76.2°F'},
  {name:'Flower 02', crop:'Flowering', status:'Attention', vpd:'1.42 kPa', temp:'79.1°F'},
  {name:'Flower 03', crop:'Flowering', status:'Watch', vpd:'1.35 kPa', temp:'77.8°F'},
  {name:'Veg 01', crop:'Vegetative', status:'Healthy', vpd:'0.95 kPa', temp:'74.0°F'},
  {name:'Veg 02', crop:'Vegetative', status:'Healthy', vpd:'1.02 kPa', temp:'73.6°F'},
  {name:'Dry 01', crop:'Drying', status:'Processing', vpd:'0.68 kPa', temp:'66.4°F'},
];

export const today = [
  {title:'High EC in Flower 02', desc:'EC 3.2 mS/cm above target', priority:'High', age:'18m ago'},
  {title:'Dry 01 behind schedule', desc:'Estimated delay 6.4 hours', priority:'Medium', age:'1h ago'},
  {title:'HVAC zone 3 temperature fluctuation', desc:'±2.4°F over threshold', priority:'Medium', age:'2h ago'},
  {title:'Batch FLW-2024-073 due for QC', desc:'Harvested two days ago', priority:'Low', age:'3h ago'},
  {title:'Packaging line cleaning due', desc:'Line 2 due in four hours', priority:'Low', age:'5h ago'},
];

export const intelligence = [
  {title:'Crop anomaly detected in Flower 02', category:'Crop Health', text:'AI detected a visual canopy pattern that merits grower review.', age:'18m ago'},
  {title:'Dry room delay risk', category:'Process', text:'Dry 01 is projected to miss target moisture timing by 6.4 hours.', age:'1h ago'},
  {title:'HVAC abnormality in Zone 3', category:'Facility', text:'Temperature cycling increased versus the room baseline.', age:'2h ago'},
  {title:'Forecast improvement opportunity', category:'Intelligence', text:'Veg 02 lighting profile differs from stronger historical cycles.', age:'3h ago'},
];

export const improvements = [
  {title:'Reduce Dry Time Variability', sub:'Drying Optimization', value:'$28.4K'},
  {title:'Increase Flower Yield', sub:'Nutrient + Environment', value:'$43.7K'},
  {title:'Lower Energy Consumption', sub:'HVAC + Lighting', value:'$21.3K'},
  {title:'Improve First-Pass Yield', sub:'Process Standardization', value:'$31.3K'},
];

export const attentionItems = [
  {id:'ATT-2024-0514-001', item:'Temperature excursion in Flower 02', detail:'Temperature reached 79.1°F for 24 minutes', area:'Flower 02', type:'Process', severity:'Critical', status:'New', owner:'Sarah M.', age:'18m'},
  {id:'ATT-2024-0514-002', item:'Crop anomaly cluster detected', detail:'AI detected an unusual canopy pattern', area:'Veg 01', type:'Quality', severity:'High', status:'New', owner:'Alex R.', age:'1h 05m'},
  {id:'ATT-2024-0514-003', item:'SOP delay: Dry Room cleaning', detail:'SOP-DRY-07 delayed by two hours', area:'Dry 01', type:'Process', severity:'High', status:'Acknowledged', owner:'Mike T.', age:'1h 32m'},
  {id:'ATT-2024-0514-004', item:'HVAC abnormality in Zone 3', detail:'Supply-air temperature deviated from baseline', area:'Zone 3', type:'Equipment', severity:'Medium', status:'Investigating', owner:'Jordan K.', age:'2h 12m'},
  {id:'ATT-2024-0514-005', item:'QC review needed: Moisture variance', detail:'Batch FLW-2024-071', area:'Lab QC', type:'Quality', severity:'Medium', status:'New', owner:'Priya N.', age:'2h 45m'},
  {id:'ATT-2024-0514-006', item:'Camera quality degraded', detail:'Three cameras reporting reduced visibility', area:'Flower 03', type:'Data', severity:'Low', status:'Acknowledged', owner:'Taylor S.', age:'3h 10m'},
  {id:'ATT-2024-0514-007', item:'Light intensity variance', detail:'PPFD below target in Zone 1A', area:'Zone 1A', type:'Process', severity:'Low', status:'Investigating', owner:'Chris L.', age:'4h 02m'},
  {id:'ATT-2024-0514-008', item:'Packaging line slow cycle', detail:'Average cycle time is 18% above baseline', area:'Packaging', type:'Process', severity:'Medium', status:'New', owner:'Jamie P.', age:'5h 18m'},
];

export const batchesByStage = {
  Propagation: [
    {id:'BCH-PROP-2024-021', name:'Tropicana Cookies', place:'Clone Room 01', day:'Day 6', volume:'512 plants', status:'Healthy'},
    {id:'BCH-PROP-2024-022', name:'Gelato 41', place:'Clone Room 02', day:'Day 4', volume:'384 plants', status:'Healthy'},
    {id:'BCH-PROP-2024-023', name:'Runtz', place:'Clone Room 01', day:'Day 3', volume:'256 plants', status:'Watch'}
  ],
  Vegetative: [
    {id:'BCH-VEG-2024-015', name:'Tropicana Cookies', place:'Veg Room 01', day:'Day 14', volume:'1,280 plants', status:'Healthy'},
    {id:'BCH-VEG-2024-016', name:'Gelato 41', place:'Veg Room 02', day:'Day 12', volume:'1,024 plants', status:'Healthy'},
    {id:'BCH-VEG-2024-017', name:'Blue Dream', place:'Veg Room 01', day:'Day 11', volume:'1,152 plants', status:'Watch'}
  ],
  Flower: [
    {id:'BCH-FLW-2024-073', name:'Flower Standard v2.1', place:'Flower Room 01', day:'Day 28', volume:'1,280 plants', status:'Healthy'},
    {id:'BCH-FLW-2024-074', name:'Blue Dream', place:'Flower Room 02', day:'Day 21', volume:'1,152 plants', status:'Watch'},
    {id:'BCH-FLW-2024-075', name:'GMO', place:'Flower Room 01', day:'Day 18', volume:'1,024 plants', status:'Attention'}
  ],
  Harvest: [
    {id:'BCH-HRV-2024-052', name:'Flower Standard v2.1', place:'Harvest Room 01', day:'Day 1', volume:'1,280 plants', status:'Processing'},
    {id:'BCH-HRV-2024-053', name:'Blue Dream', place:'Harvest Room 01', day:'Day 1', volume:'1,152 plants', status:'Processing'}
  ],
  Dry: [
    {id:'BCH-DRY-2024-041', name:'GMO', place:'Dry Room 01', day:'Day 3', volume:'1,024 plants', status:'Processing'},
    {id:'BCH-DRY-2024-042', name:'Tropicana Cookies', place:'Dry Room 02', day:'Day 2', volume:'1,280 plants', status:'Watch'}
  ],
  Cure: [
    {id:'BCH-CUR-2024-031', name:'Blue Dream', place:'Cure Room 01', day:'Day 5', volume:'820 kg', status:'Processing'},
    {id:'BCH-CUR-2024-032', name:'Runtz', place:'Cure Room 02', day:'Day 4', volume:'710 kg', status:'Watch'}
  ],
  QC: [
    {id:'BCH-QC-2024-022', name:'Tropicana Cookies', place:'QC Lab 01', day:'In Testing', volume:'680 kg', status:'Watch'},
    {id:'BCH-QC-2024-023', name:'Flower Standard v2.1', place:'QC Lab 01', day:'In Testing', volume:'710 kg', status:'Processing'}
  ],
  Release: [
    {id:'BCH-REL-2024-011', name:'Blue Dream', place:'Release Ready', day:'Approved', volume:'820 kg', status:'Healthy'},
    {id:'BCH-REL-2024-012', name:'Gelato 41', place:'Release Ready', day:'Approved', volume:'680 kg', status:'Healthy'}
  ]
} as const;

export const kpis = [
  {name:'Saleable Yield / m²', current:'1.72 kg', baseline:'1.55 kg', change:'+11.2%', target:'1.80 kg', status:'On Track'},
  {name:'First-Pass Acceptance', current:'94.6%', baseline:'88.5%', change:'+6.1 pp', target:'95.0%', status:'On Track'},
  {name:'Room Turnaround', current:'5.3 days', baseline:'6.4 days', change:'-17%', target:'5.0 days', status:'On Track'},
  {name:'Energy Intensity', current:'0.68 kWh/g', baseline:'0.78 kWh/g', change:'-12.7%', target:'0.65 kWh/g', status:'On Track'},
  {name:'Drying Time Variability', current:'3.1% CV', baseline:'7.2% CV', change:'-57%', target:'≤ 3.0%', status:'On Track'},
  {name:'Packaging Line Efficiency', current:'89.1%', baseline:'82.0%', change:'+7.1 pp', target:'90.0%', status:'On Track'},
  {name:'Water Use Efficiency', current:'2.34 L/g', baseline:'2.71 L/g', change:'-13.7%', target:'2.30 L/g', status:'On Track'},
  {name:'Cost of Goods Sold', current:'$0.94/g', baseline:'$1.12/g', change:'-16.1%', target:'$0.90/g', status:'On Track'}
];

export const improvementPortfolio = [
  ['Dry Time Variability Reduction','Drying Optimization','7.2% CV','3.1% CV','57%','$28.4K'],
  ['Increase Flower Yield','Nutrient + Env Control','1.55 kg/m²','1.72 kg/m²','11%','$43.7K'],
  ['Improve First Pass Yield','Process Standardization','88.5%','94.6%','6.1 pp','$31.3K'],
  ['Reduce Energy Intensity','HVAC + Lighting','0.78 kWh/g','0.68 kWh/g','12.7%','$21.3K'],
  ['Room Turnaround Acceleration','Workflow + Scheduling','6.4 days','5.3 days','17%','$18.9K'],
  ['Packaging Line Efficiency','Line Flow + RFT','82.0%','89.1%','7.1 pp','$14.8K']
];
