export type Project = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  incident: {
    situation: string;
    impact: string;
    actions: string[];
    tools: string[];
    result: string;
    notes?: string[];
  };
};

export const projects: Project[] = [
  {
    slug: "virtualization-ops",
    title: "Virtualization & Infrastructure Operations",
    summary:
      "Managed VMware ESXi and Proxmox environments hosting production systems; maintained stability and performance.",
    tags: ["VMware ESXi", "Proxmox", "Windows Server", "Linux"],
    incident: {
      situation:
        "Production VMs required consistent performance, patching, and maintenance across VMware ESXi and Proxmox hosts.",
      impact:
        "Resource contention or misconfiguration could impact business-critical services and remote operations.",
      actions: [
        "Performed host/VM health checks, capacity reviews, and service validations.",
        "Handled OS-level troubleshooting for Windows and Linux guests.",
        "Applied tuning and maintenance practices to maintain stability.",
        "Documented configurations and recovery steps in BookStack.",
      ],
      tools: ["VMware ESXi", "Proxmox", "Windows Server", "Linux", "BookStack"],
      result:
        "Maintained stable VM operations and improved operational clarity through documentation and repeatable procedures.",
    },
  },
  {
    slug: "mikrotik-network-admin",
    title: "Network Administration & Troubleshooting (Mikrotik)",
    summary:
      "Configured Mikrotik routers/switches, supported connectivity troubleshooting, and applied basic firewall hardening.",
    tags: ["Mikrotik", "TCP/IP", "DNS", "Firewall", "VPN"],
    incident: {
      situation:
        "Users experienced intermittent connectivity issues requiring reliable network configuration and troubleshooting.",
      impact:
        "Connectivity issues reduced productivity and could disrupt access to internal systems and hosted services.",
      actions: [
        "Configured and managed Mikrotik devices to meet environment needs.",
        "Troubleshot connectivity issues and validated DNS/VPN access where applicable.",
        "Applied firewall rules and basic hardening aligned to operational requirements.",
        "Coordinated validation with users/teams and documented changes.",
      ],
      tools: ["Mikrotik", "TCP/IP", "DNS", "VPN", "Firewall Rules"],
      result:
        "Improved network stability and reduced recurring issues through configuration cleanup and documented changes.",
    },
  },
  {
    slug: "server-migration-raid",
    title: "Server Migration & RAID Configuration",
    summary:
      "Migrated Windows/SQL workloads with zero data loss and configured RAID for redundancy and performance.",
    tags: ["Windows Server", "SQL Server", "RAID 1/5/10", "Dell PowerEdge"],
    incident: {
      situation:
        "Client environments required migration to modern hardware/virtualized platforms while preserving database integrity.",
      impact:
        "Migration mistakes could cause downtime or data loss for business-critical systems.",
      actions: [
        "Planned migration steps to minimize downtime and reduce risk.",
        "Validated services and data integrity after cutover.",
        "Configured RAID (1/5/10) for redundancy and performance targets.",
        "Reported progress and outcomes to stakeholders.",
      ],
      tools: ["Windows Server", "SQL Server", "Dell PowerEdge", "RAID Controllers"],
      result:
        "Completed migrations successfully with maintained data integrity and improved storage reliability/performance.",
    },
  },
  {
    slug: "cloudflare-email-migration",
    title: "Website & Email Infrastructure Migration",
    summary:
      "Removed malware, migrated hosting, integrated Cloudflare, and fixed Zoho Mail DNS (SPF/DKIM/MX) for deliverability.",
    tags: ["Cloudflare", "DNS", "CDN", "DDoS", "SPF/DKIM/MX", "Zoho Mail"],
    incident: {
      situation:
        "A production website required malware cleanup and migration to a more secure environment with stable email delivery.",
      impact:
        "Security risks and DNS/email misconfigurations could damage reputation and disrupt business communications.",
      actions: [
        "Removed malware indicators and verified site health post-cleanup.",
        "Migrated hosting from Bluehost to Cloudways and integrated Cloudflare.",
        "Configured Cloudflare DNS/CDN and enabled protections as required.",
        "Reconfigured Zoho Mail DNS records (MX/SPF/DKIM) to restore deliverability.",
      ],
      tools: ["Cloudflare", "DNS", "Cloudways", "Zoho Mail", "SPF/DKIM/MX"],
      result:
        "Completed migration with improved security/performance and restored reliable email deliverability.",
      notes: [
        "Strong example of DNS fundamentals + security + reliability (highly relevant to remote sysadmin roles).",
      ],
    },
  },
];
