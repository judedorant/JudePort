export type Project = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  features: string[];
  stack: string[];
  image: string;
  gallery: { src: string; alt: string; caption: string }[];
  disclaimer?: string;
};

export const projects: Project[] = [
  {
    slug: "business-management-systems",
    number: "01",
    title: "Business Management Systems",
    category: "Business Applications",
    summary:
      "Business-focused applications for organizing operational workflows and keeping important records accessible.",
    challenge:
      "Business teams often rely on disconnected processes and manual recordkeeping. Applications need to represent real workflows while keeping data structured and maintainable.",
    solution:
      "Developed and maintained database-driven software features with an emphasis on clear business rules, reliable data handling, and practical support for users.",
    features: [
      "Business workflow and record management",
      "Database-backed application features",
      "Input validation and error handling",
      "Maintenance, debugging, and iterative improvements",
    ],
    stack: ["PHP", "Laravel", "Microsoft SQL Server"],
    image: "/images/projects/business-dashboard.svg",
    gallery: [
      {
        src: "/images/projects/business-dashboard.svg",
        alt: "Illustrative business dashboard preview",
        caption: "Dashboard preview — replace with an approved project screenshot.",
      },
      {
        src: "/images/projects/business-records.svg",
        alt: "Illustrative business records table",
        caption: "Records view — replace with an approved project screenshot.",
      },
    ],
    disclaimer:
      "This is a generalized project summary. Do not publish confidential company details or imply the placeholder screenshots are actual production screens.",
  },
  {
    slug: "pos-inventory",
    number: "02",
    title: "POS & Inventory",
    category: "Retail Systems",
    summary:
      "A point-of-sale and inventory project concept for tracking products, sales, and stock movements.",
    challenge:
      "Retail workflows require consistent product records, accurate stock quantities, and sales information that is easy to review.",
    solution:
      "Designed a database-driven application concept that groups product, inventory, and sales workflows into a maintainable interface.",
    features: [
      "Product and inventory records",
      "Sales transaction workflow",
      "Stock movement visibility",
      "Structured data for reporting",
    ],
    stack: ["Laravel", "PHP", "MySQL", "React"],
    image: "/images/projects/pos-inventory.svg",
    gallery: [
      {
        src: "/images/projects/pos-inventory.svg",
        alt: "Illustrative point of sale and inventory dashboard",
        caption: "POS and inventory overview — replace with your own screenshot.",
      },
      {
        src: "/images/projects/inventory-table.svg",
        alt: "Illustrative inventory management table",
        caption: "Inventory table — replace with your own screenshot.",
      },
    ],
    disclaimer:
      "Present this as a concept or personal project unless you have a completed implementation you can demonstrate.",
  },
  {
    slug: "api-ldap-integration",
    number: "03",
    title: "Web API & LDAP Integration",
    category: "Backend & Integration",
    summary:
      "Backend services and directory integration patterns that help applications exchange data and support centralized authentication.",
    challenge:
      "Applications may need consistent API responses and a secure way to validate users against an organization's directory service.",
    solution:
      "Worked with backend API development and LDAP/Active Directory integration concepts, focusing on maintainable endpoints and authentication workflows.",
    features: [
      "API endpoint design and integration",
      "Structured request validation and responses",
      "Directory-based authentication integration",
      "Troubleshooting across application layers",
    ],
    stack: ["Laravel", "PHP", "REST APIs", "LDAP / Active Directory"],
    image: "/images/projects/api-integration.svg",
    gallery: [
      {
        src: "/images/projects/api-integration.svg",
        alt: "Illustrative API integration architecture",
        caption: "Integration overview — replace with an approved diagram or screenshot.",
      },
      {
        src: "/images/projects/api-response.svg",
        alt: "Illustrative API response preview",
        caption: "API response preview — replace with a sanitized example.",
      },
    ],
    disclaimer:
      "Never expose internal hostnames, tokens, directory details, employee data, or production endpoints in public portfolio screenshots.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
