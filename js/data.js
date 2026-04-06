// js/data.js
// Source of truth for the heatmap data.
// Tier colors and all tier values verified against the SVGs provided by the client.

export const TIERS = ['Meaningful', 'Limited', 'Deficient', 'Minimal', 'Negligible', 'Not Available'];

export const TIER_RANGE = {
  'Meaningful':    '81–100',
  'Limited':       '61–80',
  'Deficient':     '41–60',
  'Minimal':       '21–40',
  'Negligible':    '0–20',
  'Not Available': null,
};

// Sort score: higher = more transparent
export const TIER_SCORE = {
  'Meaningful':    5,
  'Limited':       4,
  'Deficient':     3,
  'Minimal':       2,
  'Negligible':    1,
  'Not Available': 0,
};

export const TIER_COLORS = {
  'Meaningful':    { bg: '#496AB1', text: '#ffffff' },
  'Minimal':       { bg: '#F28B4C', text: '#ffffff' },
  'Limited':       { bg: '#41B5DF', text: '#ffffff' },
  'Negligible':    { bg: '#EA4E54', text: '#ffffff' },
  'Deficient':     { bg: '#F3CB00', text: '#342764' },
  'Not Available': { bg: '#EDEDED', text: '#ffffff' },
};

// Platform data. Each entry has ugc and ads tiers per region.
// null = not assessed for that data type (e.g. Bluesky has no ads).
export const platforms = [
  {
    name: 'Bluesky',
    owner: 'Bluesky PBLLC',
    isVlop: false,
    ugc: { eu: 'Meaningful', uk: 'Meaningful', brazil: 'Meaningful' },
    ads: null,
  },
  {
    name: 'Discord',
    owner: 'Discord Inc.',
    isVlop: false,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'Facebook',
    owner: 'Meta Platforms Inc.',
    isVlop: true,
    ugc: { eu: 'Negligible', uk: 'Negligible', brazil: 'Negligible' },
    ads: { eu: 'Limited', uk: 'Meaningful', brazil: 'Deficient' },
  },
  {
    name: 'Instagram',
    owner: 'Meta Platforms Inc.',
    isVlop: true,
    ugc: { eu: 'Negligible', uk: 'Negligible', brazil: 'Negligible' },
    ads: { eu: 'Limited', uk: 'Meaningful', brazil: 'Deficient' },
  },
  {
    name: 'Kwai',
    owner: 'Kuaishou Technology',
    isVlop: false,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'LinkedIn',
    owner: 'Microsoft Corporation',
    isVlop: true,
    ugc: { eu: 'Minimal', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Limited', uk: 'Deficient', brazil: 'Deficient' },
  },
  {
    name: 'Pinterest',
    owner: 'Pinterest Inc.',
    isVlop: true,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Negligible', uk: 'Not Available', brazil: 'Negligible' },
  },
  {
    name: 'Reddit',
    owner: 'Reddit Inc.',
    isVlop: false,
    ugc: { eu: 'Limited', uk: 'Limited', brazil: 'Limited' },
    ads: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'Snapchat',
    owner: 'Snap Inc.',
    isVlop: true,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Negligible', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'Telegram',
    owner: 'Telegram Messenger Inc.',
    isVlop: false,
    ugc: { eu: 'Limited', uk: 'Limited', brazil: 'Limited' },
    ads: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'Threads',
    owner: 'Meta Platforms Inc.',
    isVlop: false,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Limited', uk: 'Meaningful', brazil: 'Deficient' },
  },
  {
    name: 'TikTok',
    owner: 'ByteDance',
    isVlop: true,
    ugc: { eu: 'Deficient', uk: 'Deficient', brazil: 'Not Available' },
    ads: { eu: 'Limited', uk: 'Limited', brazil: 'Not Available' },
  },
  {
    name: 'WhatsApp',
    owner: 'Meta Platforms Inc.',
    isVlop: true,
    ugc: { eu: 'Not Available', uk: 'Not Available', brazil: 'Not Available' },
    ads: { eu: 'Limited', uk: 'Meaningful', brazil: 'Deficient' },
  },
  {
    name: 'X / Twitter',
    owner: 'X Corp.',
    isVlop: true,
    ugc: { eu: 'Limited', uk: 'Limited', brazil: 'Limited' },
    ads: { eu: 'Negligible', uk: 'Not Available', brazil: 'Not Available' },
  },
  {
    name: 'YouTube',
    owner: 'Google LLC',
    isVlop: true,
    ugc: { eu: 'Meaningful', uk: 'Meaningful', brazil: 'Meaningful' },
    ads: { eu: 'Limited', uk: 'Deficient', brazil: 'Negligible' },
  },
];
