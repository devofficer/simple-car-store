import { setError } from "actions/auxiliary";
import { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ErrorTracker = () => {
  const dispatch = useDispatch();
  const error = useSelector(state => state.auxiliary.error);

  useEffect(() => {
    if (error) {
      setTimeout(() => dispatch(setError(null)), 3000);
    }
  }, [error, dispatch]);

  return error && (
    <div style={{ background: 'red', color: 'white', padding: 8 }}>
      <h4>{error.name}</h4>
      <h3>{error?.message}</h3>
    </div>
  )
};

export default memo(ErrorTracker);