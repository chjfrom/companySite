import ReactFullpage from '@fullpage/react-fullpage';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

// NOTE: if using fullpage extensions/plugins put them here and pass it as props.
const pluginWrapper = () => {};

export default function FullPage() {
  // const [sectionsColor, setSectionsColor] = useState([...originalColors]);
  // const [fullpages, setFullpages] = useState(originalPages);

  const onLeave = (origin, destination, direction) => {
    console.log('onLeave', { origin, destination, direction });
    // arguments are mapped in order of fullpage.js callback arguments do something
    // with the event
  };

  return (
    <ReactFullpage
      // navigation
      // pluginWrapper={pluginWrapper}
      onLeave={onLeave}
      // scrollHorizontally = {true}
      // sectionsColor={sectionsColor}
      render={(comp) => (
        <ReactFullpage.Wrapper>
          <Section1 />
          <Section2 />
          <Section3 />
          <Section4 />
        </ReactFullpage.Wrapper>
      )}
    />
  );
}
