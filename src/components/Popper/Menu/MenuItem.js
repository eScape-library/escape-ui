import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/collections/${data.subCategoryId}`, {
            state: { collectionName: data.subCategoryName },
        });
    };
    return (
        <Button text className={cx('menu-item')} to="" leftIcon={data.icon} onClick={handleClick}>
            {data.subCategoryName}
        </Button>
    );
}

export default MenuItem;
