// IN APP.JS
const [visibleSection, setVisibleSection] = useState();
import {getDimensions} from './utilities/helpers';

const [myRequestedRefs, setMyRequestedRefs] = useState();

const sectionRefs = [
  // { section: "Leadership", ref: about },
  // { section: "Providers", ref: providerRef },
  // { section: "Operations", ref: operationsRef },
];
const headerRef = useRef(null);

useEffect(() => {
  const handleScroll = () => {
    const { height: headerHeight } = getDimensions(headerRef.current);
    const scrollPosition = window.scrollY + headerHeight;

    const selected = sectionRefs.find(({ section, ref }) => {
      const ele = ref.current;
      if (ele) {
        const { offsetBottom, offsetTop } = getDimensions(ele);
        return scrollPosition > offsetTop && scrollPosition < offsetBottom;
      }
    });

    if (selected && selected.section !== visibleSection) {
      setVisibleSection(selected.section);
    } else if (!selected && visibleSection) {
      setVisibleSection(undefined);
    }
  };

  handleScroll();
  window.addEventListener("scroll", handleScroll);
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [visibleSection]);


const getRefsFromChild = childRefs => {
  setMyRequestedRefs({childRefs});
  console.log(myRequestedRefs); // this should have *info*, *contact* as keys
};    



<Body className='main' passRefUpward={getRefsFromChild} />


// IN BODY

useEffect(props => {
  // props.passRefUpward(refs);
}, [])