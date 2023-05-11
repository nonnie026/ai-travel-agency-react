import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  dialogTitle: {
    backgroundColor: '#3f51b5',
    color: 'white',
  },
  dialogContent: {
    backgroundColor: '#f5f5f5',
  },
  dialogActions: {
    backgroundColor: '#e0e0e0',
  },
});

export const StyledDialog = ({ content, title, handleCloseBanner, open }) => {
  const classes = useStyles();

  return (
    <div>
      <Dialog open={open} onClose={handleCloseBanner}>
        <DialogTitle className={classes.dialogTitle}>{title}</DialogTitle>
        <DialogContent className={classes.dialogContent}>{content}</DialogContent>
        <DialogActions className={classes.dialogActions}>
          <Button onClick={handleCloseBanner} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
