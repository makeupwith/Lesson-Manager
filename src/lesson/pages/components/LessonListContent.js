import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import List, { ListItem } from 'material-ui/List'
import Typography from 'material-ui/Typography'
import Input from 'material-ui-icons/Input'
import Button from 'material-ui/Button'

const styles = () => ({
  root: {
    width: '1000px'
  },
  textPrimary: {
    fontSize: '14px'
  },
  secondary: {
    fontSize: '16px',
    color: '#000'
  },
  divider: {
    color: '#000000',
    opacity: '0.54'
  },
  lineMain: {
    display: 'inline-block',
    marginRight: '15px',
    fontSize: '18px',
    fontWeight: 'bold',
    fontColor: '#000000',
    opacity: '0.87'
  },
  lineSub: {
    display: 'inline-block',
    marginRight: '15px',
    fontSize: '18px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  lineMainLogo: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  lineSubLogo: {
    fontSize: '18px',
    fontColor: '#000000',
    opacity: '0.87'
  },
  term: {
    width: '330px'
  },
  timePeriod: {
    width: '330px'
  },
  department: {
    width: '660px'
  },
  teacherName: {
    width: '660px'
  },
  button: {
    marginLeft: '250px'
  },
  icon: {
    marginLeft: '5px'
  },
  getButton: {
    marginLeft: '250px',
    color: '#00BCD4',
    fontSize: '18px',
    marginTop: '32px',
    width: '200px',
    zIndex: '1000'
  },
  colorInherit: {
    color: '#00BCD4'
  }
})

const LessonListContent = ({
  classes, label, lesson, onClick, ...other
}) => (
  <div className={classes.root} {...other}>
    <List>
      <ListItem divider>
        <div className={classes.term}>
          <Typography className={classes.lineMain}>
            開講日
          </Typography>
          <Typography className={classes.lineSub}>
            {lesson.term}
          </Typography>
        </div>
        <div className={classes.timePeriod}>
          <Typography className={classes.lineMain}>
            曜日・時限
          </Typography>
          <Typography className={classes.lineSub}>
            {lesson.time_period}
          </Typography>
        </div>
      </ListItem>
      <ListItem divider>
        <div className={classes.department}>
          <Typography className={classes.lineMain}>
            対象学部
          </Typography>
          <Typography className={classes.lineSub}>
            {lesson.department}
          </Typography>
        </div>
        <div className={classes.grade}>
          <Typography className={classes.lineMain}>
            年次
          </Typography>
          <Typography className={classes.lineSub}>
            {`${lesson.grade}年次`}
          </Typography>
        </div>
      </ListItem>
      <ListItem divider>
        <div className={classes.teacherName}>
          <Typography className={classes.lineMain}>
            教員名
          </Typography>
          <Typography className={classes.lineSub}>
            {lesson.teacher_name}
          </Typography>
        </div>
        <div className={classes.credit}>
          <Typography className={classes.lineMain}>
            単位数
          </Typography>
          <Typography className={classes.lineSub}>
            {`${lesson.unit}単位`}
          </Typography>
        </div>
      </ListItem>
      <ListItem divider>
        <div className={classes.estimation}>
          <Typography className={classes.lineMainLogo}>
            評価方法
          </Typography>
          <Typography className={classes.lineSubLogo}>
            {lesson.evaluation}
          </Typography>
        </div>
      </ListItem>
      <ListItem divider>
        <div className={classes.outline}>
          <Typography className={classes.lineMainLogo}>
            概要
          </Typography>
          <Typography className={classes.lineSubLogo}>
            {lesson.outline}
          </Typography>
        </div>
      </ListItem>
      <ListItem>
        <div className={classes.button}>
          <Button
            classes={{ colorInherit:classes.colorInherit }}
            className={classes.getButton}
            onClick={onClick}
          >
            {label}
            <Input className={classes.icon} />
          </Button>
        </div>
      </ListItem>
    </List>
  </div>
)

LessonListContent.propTypes = {
  classes: PropTypes.object.isRequired,
  label : PropTypes.string,
  lesson: PropTypes.object,
  onClick: PropTypes.func
}

export default withStyles(styles)(LessonListContent)
