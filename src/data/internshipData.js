import imgValidasi from '../assets/validasidata.jpeg'
import imgRekap from '../assets/datarekap.jpeg'
import imgRekapDetail from '../assets/datarekap1.jpeg'
import imgDokumen from '../assets/dokumensupport.jpeg'

export const internshipData = [
    {
        id: 1,
        slug: 'validation-data',
        title: 'Validation Data',
        description: 'Checking and validating financial and administrative data to ensure document accuracy and consistency.',
        details: 'During this activity, I was responsible for cross-checking financial records and administrative documents to ensure all entries were accurate and consistent. Tasks included verifying data input against source documents, identifying discrepancies, and reporting corrections to the finance team to maintain audit-ready documentation.',
        image: imgValidasi,
        detailImage: imgValidasi,
        position: 'object-center',
        tags: ['Validation', 'Finance', 'Administration'],
    },
    {
        id: 2,
        slug: 'recap-data',
        title: 'Recap Data',
        description: 'Organizing and recapitulating financial data into structured reports and spreadsheets for administrative purposes.',
        details: 'I compiled and organized daily financial transaction data into structured Microsoft Excel spreadsheets, generating clear recap reports for the finance team. This involved categorizing expenses, applying formulas for summaries, and ensuring all figures matched the approved financial records before submission.',
        image: imgRekap,
        detailImage: imgRekapDetail,
        position: 'object-center',
        tags: ['Data Entry', 'Reporting', 'Excel'],
    },
    {
        id: 3,
        slug: 'support-document',
        title: 'Support Document',
        description: 'Preparing and managing supporting documents related to finance and administrative activities.',
        details: 'I handled the preparation, filing, and management of supporting documents including invoices, receipts, and administrative forms used in financial workflows. This role required maintaining a well-organized document archive, ensuring every record was properly labeled and accessible for audit and reporting needs.',
        image: imgDokumen,
        detailImage: imgDokumen,
        position: 'object-center',
        tags: ['Documentation', 'Operations', 'Finance'],
    },
]
