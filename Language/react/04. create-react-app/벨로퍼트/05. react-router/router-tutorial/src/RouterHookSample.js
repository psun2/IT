import {
  useHistory,
  useLocation,
  useRouteMatch,
  useParams,
} from 'react-router-dom';

import useReactRouter from 'use-react-router';

const RouterHookSample = (props) => {
  console.log('useHistory:', useHistory());
  console.log('useLocation:', useLocation());
  console.log('useRouteMatch:', useRouteMatch());
  console.log('useParams:', useParams());

  const { location, match, history } = useReactRouter();
  console.log('location:', location);
  console.log('match:', match);
  console.log('history:', history);
  return null;
};

export default RouterHookSample;

// useHistory: {length: 50, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
// useLocation: {pathname: "/profiles", search: "", hash: "", state: undefined, key: "ihve90"}
// useRouteMatch: {path: "/profiles", url: "/profiles", isExact: true, params: {…}}
// useParams: {}

// location: {pathname: "/profiles", search: "", hash: "", state: undefined, key: "ihve90"}
// match: {path: "/profiles", url: "/profiles", isExact: true, params: {…}}
// history: {length: 50, action: "POP", location: {…}, createHref: ƒ, push: ƒ, …}
