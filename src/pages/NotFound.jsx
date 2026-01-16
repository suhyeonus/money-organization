import usePageTitle from '../hooks/usePageTitle';

const NotFound = () => {
    usePageTitle("한입 가계부 - 404");
    return <h1>페이지를 찾을 수 없습니다.</h1>
};

export default NotFound;