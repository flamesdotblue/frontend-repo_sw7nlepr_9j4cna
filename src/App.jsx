import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import FeaturesCTA from './components/FeaturesCTA';
import ImpactGoalsFooter from './components/ImpactGoalsFooter';

export default function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#F5F5F5' }}>
      <Hero />
      <ProblemSolution />
      <FeaturesCTA />
      <ImpactGoalsFooter />
    </div>
  );
}
