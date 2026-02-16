import FadeUp from '../Animation/FadeUp';


// Define the type for each stat item
interface StatItem {
    value: string;
    label: string;
}

// Define the props for the AchievementsSummary component
interface AchievementsSummaryProps {
    stats: StatItem[]; // Array of stats to display
}

const AchievementsSummary: React.FC<AchievementsSummaryProps> = ({ stats }) => {
    return (
        <div className={`achievements-summary`}>
            <div className="container">
                <FadeUp>
                    <ul>
                        {stats.map((stat, index) => (
                            <li key={index}>
                                <h2>{stat.value}</h2>
                                <p>{stat.label}</p>
                            </li>
                        ))}
                    </ul>
                </FadeUp>
            </div>
        </div>
    );
};

export default AchievementsSummary;
