import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Button from '../../Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import categorySlice from '../../../pages/Category/categorySlice';
import paginationSlice from '../../Pagination/paginationSlice';
import filterSlice from '../../Filter/filterSlice';

const cx = classNames.bind(styles);

function MenuItem({ data }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(categorySlice.actions.setCollectionName(data.subCategoryName));
        dispatch(categorySlice.actions.setSubCatId(data.subCategoryId));
        dispatch(paginationSlice.actions.setPage(1));
        dispatch(filterSlice.actions.resetFilter());
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
