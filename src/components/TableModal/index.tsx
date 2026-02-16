import { useEffect } from "react";
import Modal from "../Modal";

interface TableModalProps {
    headers: string[];
    rows: Record<string, string>[];
    open: boolean;
    onClose: () => void;
}

export default function TableModal({ headers, rows, open, onClose }: TableModalProps) {
    // Disable scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('no-scroll');
        };
    }, [open]);

    // Compute visible headers by filtering out headers where all rows have empty values
    const visibleHeaders = headers.filter(header =>
        rows.some((row: Record<string, string>) => {
            const cell = row[header];
            return cell !== undefined && cell !== null && cell.toString().trim() !== "";
        })
    );

    if (!open) return null;

    return (
        <section className='table-modal'>
            <Modal open={open} onClose={onClose}>
                <div className="d-flex align-items-center justify-content-center">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th style={{ width: 55 }}>Sr No.</th>
                                    {visibleHeaders.map((header, index) => (
                                        <th key={index} style={header === "Features" ? { width: 200 } : {}}>
                                            {header}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody>
                                {rows.map((row: Record<string, string>, rowIndex) => (
                                    <tr key={rowIndex}>
                                        <td>{rowIndex + 1}</td>
                                        {visibleHeaders.map((header, cellIndex) => (
                                            <td key={cellIndex}>
                                                {row[header] !== "" ? row[header] : null}
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </Modal>
        </section>
    )
}
