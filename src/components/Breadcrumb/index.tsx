import { Link, useLocation } from 'react-router-dom';

const Breadcrumb: React.FC = () => {

    // Utility function to format the breadcrumb labels
    const formatLabel = (segment: string): string => {
        return segment
            .replace(/-/g, ' ')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const location = useLocation();
    const pathnames = location.pathname.split('/').filter(x => x);

    return (
        <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <Link to="/">Home</Link>
            </li>
            {pathnames.map((value, index) => {
                const path = `/${pathnames.slice(0, index + 1).join('/')}`;
                const isLast = index === pathnames.length - 1;

                return (
                    <li
                        key={index}
                        className={`breadcrumb-item${isLast ? ' active' : ''}`}
                        aria-current={isLast ? 'page' : undefined}
                    >
                        {isLast ? (
                            formatLabel(value)
                        ) : (
                            <Link to={path}>{formatLabel(value)}</Link>
                        )}
                    </li>
                );
            })}
        </ol>
    );
};

export default Breadcrumb;
