import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import { useSpring, animated } from 'react-spring/web.cjs';
import { DataGrid } from '@material-ui/data-grid';
import {PropertyModal, PanoramicView} from './property-modal.styles';
import Streetview from 'react-google-streetview';

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const Fade = React.forwardRef(function Fade(props, ref) {
    const { in: open, children, onEnter, onExited, ...other } = props;
    const style = useSpring({
        from: { opacity: 0 },
        to: { opacity: open ? 1 : 0 },
        onStart: () => {
            if (open && onEnter) {
                onEnter();
            }
        },
        onRest: () => {
            if (!open && onExited) {
                onExited();
            }
        },
    });

    return (
        <animated.div ref={ref} style={style} {...other}>
            {children}
        </animated.div>
    );
});

Fade.propTypes = {
    children: PropTypes.element,
    in: PropTypes.bool.isRequired,
    onEnter: PropTypes.func,
    onExited: PropTypes.func,
};

const SpringModal = ({modalOpen, handleClose, currentProperty}) => {
    const classes = useStyles();
    const rows = [
        {
            id: 1,
            col1: currentProperty.baths,
            col2: currentProperty.beds,
            col3: currentProperty.propertyType
        }
    ];

    const columns = [
        {field: 'id', hide: true},
        {field: 'col1', headerName: 'Baths', width: 75},
        {field: 'col2', headerName: 'Beds', width: 75},
        {field: 'col3', headerName: 'Property Type', width: 150}
    ];

    const coordinatesRows = [
        {
            id: 1,
            col1: currentProperty.lat,
            col2: currentProperty.lon,
            col3: currentProperty.sqm,
        }
    ];

    const coordinatesColumns = [
        {field: 'id', hide: true},
        {field: 'col1', headerName: 'Lat', width: 100},
        {field: 'col2', headerName: 'Lon', width: 100},
        {field: 'col3', headerName: 'Sqm', width: 100}
    ];

    const addressPriceRows = [
        {
            id: 1,
            col1: currentProperty.address,
            col2: currentProperty.price
        }
    ];

    const addressPriceColumns = [
        {field: 'id', hide: true},
        {field: 'col1', headerName: 'Address', width: 200},
        {field: 'col2', headerName: 'Price', width: 100}
    ];

    return (
        <div>
            <Modal
                aria-labelledby="spring-modal-title"
                aria-describedby="spring-modal-description"
                className={classes.modal}
                open={modalOpen}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modalOpen}>
                    <div className={classes.paper}>
                        <h2>Property Details</h2>
                        <PanoramicView>
                        <Streetview
                            apiKey='AIzaSyDXdwfL_sRZBKsfrvcivWMTfQ5Y4GfUcf0'
                            streetViewPanoramaOptions={
                                {
                                   visible: true,
                                    position: {
                                       lat: +currentProperty.lat, lng: +currentProperty.lon
                                    }
                                }
                            }
                        />
                        </PanoramicView>
                        <PropertyModal>
                                <DataGrid
                                    rows={rows}
                                    columns={columns}
                                    rowHeight={40}
                                    headerHeight={30}
                                    hideFooter={true}
                                 />
                        </PropertyModal>
                        <PropertyModal>
                            <DataGrid
                                rows={coordinatesRows}
                                columns={coordinatesColumns}
                                rowHeight={30}
                                headerHeight={35}
                                hideFooter={true}
                            />
                        </PropertyModal>
                        <PropertyModal>
                            <DataGrid
                                rows={addressPriceRows}
                                columns={addressPriceColumns}
                                rowHeight={30}
                                headerHeight={35}
                                hideFooter={true}
                            />
                        </PropertyModal>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};

export default SpringModal;