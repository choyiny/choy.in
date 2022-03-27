import * as React from "react"
import {useEffect} from "react";
import {navigate} from "gatsby";

// markup
const NotFoundPage = () => {
  useEffect(() => {
    navigate('/');
  }, []);
  return null;
}

export default NotFoundPage
