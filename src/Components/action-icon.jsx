import React from "react";
import LightTooltip from "./light-tooltip";
import { IconButton, CircularProgress } from "@mui/material";
import * as MuiIcons from "@mui/icons-material";

const typeConfig = {
  add: { icon: "AddCircleOutline", defaultColor: "primary" },
  copy: { icon: "ContentCopy", defaultColor: "error" },
  download: { icon: "Download", defaultColor: "warning" },
  fileupload: { icon: "UploadFileOutlined", defaultColor: "secondary" },
  viewBudgetLiaisons: { icon: "Group", defaultColor: "primary" },
  viewBudgetFacilitator: { icon: "Group", defaultColor: "primary" },
  acquisitionUser: { icon: "Group", defaultColor: "primary" },
  user: { icon: "Group", defaultColor: "primary" },
  tag: { icon: "Tag", defaultColor: "secondary" },
  info: { icon: "InfoOutlined", defaultColor: "primary" },
  RuleOutlinedIcon: { icon: "Group", defaultColor: "primary" },
  edit: { icon: "EditOutlined", defaultColor: "primary" }, // keep final version
  delete: { icon: "DeleteOutline", defaultColor: "error" },
  cached: { icon: "Cached", defaultColor: "secondary" },
  viewPrism: { icon: "BackupTable", defaultColor: "primary" },
  email: { icon: "Email", defaultColor: "success" },
  validate: { icon: "PublishedWithChanges", defaultColor: "warning" },
  showChanges: { icon: "Difference", defaultColor: "secondary" },
  withdraw: { icon: "DeleteForeverOutlined", defaultColor: "secondary" },
  favourite: { icon: "Star", defaultColor: "warning" }, ///we need to change in application
  unFavourite: { icon: "StarBorder", defaultColor: "warning" }, ///we need to change in application
  history: { icon: "History", defaultColor: "warning" },
  success: { icon: "ThumbUpOutlined", defaultColor: "success" },
  error: { icon: "ThumbDownOutlined", defaultColor: "error" },
  compare: { icon: "Compare", defaultColor: "secondary" },
  baselineChanges: { icon: "Compare", defaultColor: "secondary" },
  resend: { icon: "Repeat", defaultColor: "secondary" },
  downloadBaseline: {
    icon: "DescriptionOutlined",
    defaultColor: "secondary",
  },
  close: { icon: "Close", defaultColor: "error" },
  divisions: { icon: "CorporateFare", defaultColor: "primary" },
  taskalt: { icon: "TaskAlt", defaultColor: "primary" },
  planningFacilitators: { icon: "PeopleAltOutlined", defaultColor: "primary" },
  businessRuleGroups: { icon: "RuleOutlined", defaultColor: "primary" },
  inquiryUsers: { icon: "ManageAccounts", defaultColor: "primary" },
  attachment: { icon: "Attachment", defaultColor: "primary" },
  goToReminders: { icon: "TimerOutlined", defaultColor: "primary" },
  additionalDetails: { icon: "ViewComfy", defaultColor: "primary" },
  goToUsers: { icon: "GroupAdd", defaultColor: "primary" },
  accounttree: { icon: "AccountTree", defaultColor: "primary" }, //see in your app
  fundCodes: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to FundCodes
  lookUps: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to LookUps
  businessRules: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to BusinessRules
  acquisition: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to Acruistion Vehicles
  requestType: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to Request type
  fundType: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to Fund type
  planningUsers: { icon: "GroupAddOutlined", defaultColor: "primary" },
  copyTemplate: { icon: "FileCopyOutlined", defaultColor: "primary" },
  send: { icon: "Send", defaultColor: "primary" },
  details: { icon: "ArticleOutlined", defaultColor: "primary" }, //Go to Details
  config: { icon: "Settings", defaultColor: "primary" },
  submitPrism: { icon: "TornadoOutlined", defaultColor: "secondary" },
  viewAdjustments: { icon: "Equalizer", defaultColor: "primary" },
  assingFundTypes: { icon: "AutoModeOutlined", defaultColor: "secondary" },
  regenerate: { icon: "Cached", defaultColor: "secondary" },
  view: { icon: "Visibility", defaultColor: "primary" }, //For Pop-up View
  viewDetails: { icon: "Visibility", defaultColor: "primary" }, // For Inside screen details View
  generateTemplate: { icon: "SimCardDownload", defaultColor: "secondary" },
  viewLogs: { icon: "BackupTable", defaultColor: "primary" },
  budgetFacilitators: { icon: "MonetizationOn", defaultColor: "primary" },
  planningApprovers: { icon: "TaskAlt", defaultColor: "primary" },
  fileCopy: { icon: "FileCopy", defaultColor: "primary" },
  validateUser: { icon: "VerifiedUser", defaultColor: "secondary" },
  comment: { icon: "Comment", defaultColor: "secondary" },
  ruleParameters: { icon: "Menu", defaultColor: "primary" },
  planningLiaisons: { icon: "Group", defaultColor: "primary" },
  copyRequestDetails: { icon: "ContentCopy", defaultColor: "secondary" },
  goToAttendess: { icon: "PeopleAltOutlined", defaultColor: "primary" },
  budgetReview: { icon: "CurrencyExchange", defaultColor: "error" },
  profileValue: { icon: "Group", defaultColor: "primary" },
  default: { icon: "HelpOutline", defaultColor: "secondary" },

  // admin
  fundGroup: { icon: "Group", defaultColor: "primary" }, //navigating to fundGroups
  organization: { icon: "NextWeek", defaultColor: "primary" }, // navigation to Organizations
  administrator: { icon: "AdminPanelSettings", defaultColor: "primary" }, // navigation to Administrators
  budgetApprover: { icon: "CurrencyExchange", defaultColor: "primary" }, // navigation to Budget Approver
  executive: { icon: "Group", defaultColor: "primary" }, // navigation to executive
  executiveUser: { icon: "ManageAccounts", defaultColor: "primary" }, // navigation to Executive Users
  rule: { icon: "Rule", defaultColor: "primary" }, // navigation to  Rules
  roles: { icon: "AccessibilityNew", defaultColor: "secondary" }, // navigation to  Roles
  userApplication: { icon: "Settings", defaultColor: "success" }, // navigation to  user application
  privilege: { icon: "PeopleAltOutlined", defaultColor: "primary" }, // navigation to  privileges
  templateMapping: { icon: "Link", defaultColor: "secondary" }, // navigation to  template-mapping
  template: { icon: "Nfc", defaultColor: "primary" }, // navigation to  template
  templateSection: { icon: "EventSeat", defaultColor: "primary" }, // navigation to  template-section
  sectionField: { icon: "Toc", defaultColor: "primary" }, // navigation to  section-field
  validationRule: { icon: "SwapCalls", defaultColor: "primary" }, // navigation to  validationRule
  BusinessRule: { icon: "SwapCalls", defaultColor: "primary" }, // navigation to  BusinessRule
  distributionGroup: { icon: "SwapCalls", defaultColor: "primary" }, // navigation to    distributionGroup
  message: { icon: "SwapCalls", defaultColor: "primary" },
  notificationEvent: { icon: "SwapCalls", defaultColor: "primary" },
  saveDetail: { icon: "Check", defaultColor: "success" }, // saving details
  list: { icon: "AssignmentOutlined", defaultColor: "primary" }, // List of Users
  acquisitionVehicles: { icon: "CorporateFare", defaultColor: "primary" }, //AcquisitionVechiles
  goToDivision: { icon: "SafetyDivider", defaultColor: "primary" }, // go to divisions
  goToFunding: { icon: "AttachMoney", defaultColor: "primary" }, // Go to Funding Sources
  goToTarget: { icon: "Speed", defaultColor: "primary" }, //Go to Targets
  goToRequest: { icon: "HowToVote", defaultColor: "primary" }, //Go to Request Types
  goToBusiness: { icon: "PlaylistAddCheck", defaultColor: "primary" }, //Go to Business Rule Groups
  goToDistribution: { icon: "MailOutline", defaultColor: "primary" }, //Go to Distribution Groups
  validationRules: { icon: "AssignmentOutlined", defaultColor: "primary" }, // list of Validation Rules
  fundDetail: { icon: "AssignmentOutlined", defaultColor: "primary" }, // go to fund details
  copyFundType: { icon: "FileCopyOutlined", defaultColor: "primary" }, // copy fund type
  fund: { icon: "Settings", defaultColor: "info" }, // fund

  ///Pif
  showCostElement: { icon: "RequestQuoteOutlined", defaultColor: "primary" },
  resendReview: { icon: "Repeat", defaultColor: "secondary" },
  keyProjects: { icon: "AssignmentOutlined", defaultColor: "primary" }, //
  ViewSuppliers: {
    icon: "DescriptionOutlined",
    defaultColor: "secondary",
  },
  bmsCompPlan: {
    icon: "DescriptionOutlined",
    defaultColor: "secondary",
  },
  usersProgramOffices: {
    icon: "Business",
    defaultColor: "primary",
  },
  usersRoles: {
    icon: "BrightnessAuto",
    defaultColor: "primary",
  },
  businessOwner: { icon: "BusinessCenterOutlined", defaultColor: "primary" },
  pointOfContact: { icon: "ContactEmergency", defaultColor: "primary" },
  financialAgents: { icon: "Group", defaultColor: "primary" },
  subActivities: { icon: "Group", defaultColor: "primary" },
  businessLines: { icon: "AssignmentOutlined", defaultColor: "primary" },
  programs: { icon: "AssignmentOutlined", defaultColor: "primary" },

  // Reporting

  filterLists: { icon: "List", defaultColor: "primary" },
  filterListValue: { icon: "List", defaultColor: "primary" },
  shareFilters: { icon: "Share", defaultColor: "success" },
  groupDetails: { icon: "RecentActorsOutlined", defaultColor: "primary" },
  groupEntities: { icon: "List", defaultColor: "primary" },
  run: { icon: "PlayCircleOutlined", defaultColor: "primary" },
  shareSecurity: { icon: "Security", defaultColor: "secondary" },
  changeOwner: { icon: "PersonOutlineOutlined", defaultColor: "secondary" },
  validateConnection: { icon: "DoneOutline", defaultColor: "primary" },
  share: { icon: "IosShareOutlined", defaultColor: "warning" },
  connect: { icon: "CableOutlined", defaultColor: "secondary" },
  folder: { icon: "FolderOpen", defaultColor: "primary" },
  sync: { icon: "Sync", defaultColor: "secondary" },
  value: { icon: "SettingsEthernet", defaultColor: "primary" },
  pause: { icon: "PauseCircleOutline", defaultColor: "secondary" },
  stop: { icon: "Stop", defaultColor: "error" },
  pastSubmissions: { icon: "ReorderOutlined", defaultColor: "primary" },
  processSuccess: { icon: "CheckCircleOutline", defaultColor: "success" },
  processError: { icon: "Error", defaultColor: "error" },
  processProcessing: { icon: "HourglassEmpty", defaultColor: "secondary" },
  warning: { icon: "WarningOutlined", defaultColor: "warning" },
  resubmit: { icon: "SlowMotionVideoOutlined", defaultColor: "primary" },
  protect: { icon: "VerifiedUser", defaultColor: "success" },
  unProtect: { icon: "VerifiedUserOutlined", defaultColor: "primary" },
  downloadLogs: { icon: "DescriptionOutlined", defaultColor: "primary" },
  terminate: { icon: "PanToolOutlined", defaultColor: "primary" },
  moreDetails: { icon: "GroupWorkOutlined", defaultColor: "primary" },
  more: { icon: "MoreVert", defaultColor: "default" },
  reportSet: { icon: "HorizontalSplitOutlined", defaultColor: "primary" },
  report: { icon: "DescriptionOutlined", defaultColor: "primary" },
  dashboard: { icon: "SpaceDashboardOutlined", defaultColor: "secondary" },
  chart: { icon: "AssessmentOutlined", defaultColor: "secondary" },
  addFavorite: { icon: "PostAddOutlined", defaultColor: "secondary" },
  calColumn: { icon: "Functions", defaultColor: "primary" },
  search: { icon: "Search", defaultColor: "primary" },
  filterOptions: { icon: "Sort", defaultColor: "primary" },
  collapse: { icon: "AccountTree", defaultColor: "primary" },
  expand: { icon: "AccountTreeOutlined", defaultColor: "primary" },
  copySettings: { icon: "Print", defaultColor: "primary" },
  addToFilterList: { icon: "FilterList", defaultColor: "primary" },
  removeFromFilterList: { icon: "FilterListOff", defaultColor: "error" },
  addAdvancedFilter: { icon: "Add", defaultColor: "primary" },

  // SmartHub
  previousLog: { icon: "Archive", defaultColor: "warning" },
  reschedule: { icon: "HistoryOutlined", defaultColor: "secondary" },
  cancel: { icon: "Cancel", defaultColor: "error" },
  scheduleApproval: { icon: "RecommendOutlined", defaultColor: "success" },
  checkStatus: { icon: "CheckCircle", defaultColor: "success" },
  terminateSession: { icon: "Settings", defaultColor: "primary" },
  updateLog: { icon: "Check", defaultColor: "success" },
  restart: { icon: "RestartAlt", defaultColor: "warning" },

  // Student planner
  viewDocument: { icon: "MenuBook", defaultColor: "disabled" },
  removeFromFavorites: { icon: "Flag", defaultColor: "warning" },
  addToFavorites: { icon: "FlagOutlined", defaultColor: "warning" },
  unpinDocument: { icon: "Flag", defaultColor: "warning" },
  pinDocument: { icon: "FlagOutlined", defaultColor: "warning" },
  play: { icon: "PlayCircle", defaultColor: "primary" },
  downloadDocument: { icon: "Download", defaultColor: "secondary" },
  goToTag: { icon: "AssignmentOutlined", defaultColor: "primary" }, //Go to tag
  validationGroups: { icon: "PlaylistAddCheck", defaultColor: "primary" }, //Go to Validation Groups
  budgetLiaisons: { icon: "Person", defaultColor: "primary" },
  usersAC: { icon: "Business", defaultColor: "info" },
  goToUser: { icon: "BrightnessAuto", defaultColor: "info" },

  // Integrations Planner (arc-app)
  configRequestType: { icon: "Settings", defaultColor: "secondary" }, //Config Request Type
  configDetails: { icon: "Settings", defaultColor: "secondary" }, //Configuration Details
  httpRequests: { icon: "HttpOutlined", defaultColor: "primary" }, //Go to HTTP Requests

  // Revenue Planner
  handshakeView: { icon: "Handshake", defaultColor: "secondary" }, //View Routing Slips/Agreements
  save: { icon: "AssignmentTurnedIn", defaultColor: "success" }, //Save

  // Execution Planner
  modifyAccounting: { icon: " SyncAlt", defaultColor: "warning" },

  // CR/ Allocation Planner
  funds: { icon: "Tag", defaultColor: "secondary" },

  //Old Names And Not Using
  equalizer: { icon: "Equalizer", defaultColor: "primary" },
  assignmentoutlined: { icon: "AssignmentOutlined", defaultColor: "primary" },
  currencyexchange: { icon: "CurrencyExchange", defaultColor: "error" },
  deleteoutline: { icon: "DeleteOutline", defaultColor: "error" },
  group: { icon: "Group", defaultColor: "primary" },
  difference: { icon: "Difference", defaultColor: "secondary" },
  deleteforeveroutlined: {
    icon: "DeleteForeverOutlined",
    defaultColor: "secondary",
  },
  tornadooutlined: { icon: "TornadoOutlined", defaultColor: "secondary" },
  thumbupoutlined: { icon: "ThumbUpOutlined", defaultColor: "success" },
  thumbdownoutlined: { icon: "ThumbDownOutlined", defaultColor: "error" },
  descriptionoutlined: {
    icon: "DescriptionOutlined",
    defaultColor: "secondary",
  },
  ruleoutlined: { icon: "RuleOutlined", defaultColor: "primary" },
  manageaccounts: { icon: "ManageAccounts", defaultColor: "primary" },
  timeroutlined: { icon: "TimerOutlined", defaultColor: "primary" },
  viewcomfy: { icon: "ViewComfy", defaultColor: "primary" },
  groupadd: { icon: "GroupAdd", defaultColor: "primary" },
  menu: { icon: "Menu", defaultColor: "primary" },
  articleoutlined: { icon: "ArticleOutlined", defaultColor: "primary" },
  settings: { icon: "Settings", defaultColor: "primary" },

  //Not using
  backuptable: { icon: "BackupTable", defaultColor: "primary" },
  infooutlined: { icon: "InfoOutlined", defaultColor: "primary" },
  automode: { icon: "AutoModeOutlined", defaultColor: "secondary" },
  upload: { icon: "FileUploadOutlined", defaultColor: "success" },
  import: { icon: "ImportContacts", defaultColor: "warning" },
  export: { icon: "ImportExport", defaultColor: "secondary" },
  star: { icon: "Star", defaultColor: "warning" },
  starborder: { icon: "StarBorder", defaultColor: "warning" },
  simcarddownload: { icon: "SimCardDownload", defaultColor: "secondary" },
  adminpanelsettings: { icon: "AdminPanelSettings", defaultColor: "success" },
  publish: { icon: "Publish", defaultColor: "warning" },
  viewheadline: { icon: "ViewHeadline", defaultColor: "secondary" },
  publishedwithchanges: {
    icon: "PublishedWithChanges",
    defaultColor: "warning",
  },
  getapp: { icon: "GetApp", defaultColor: "primary" },
  deleteforever: { icon: "DeleteForever", defaultColor: "secondary" },
  repeat: { icon: "Repeat", defaultColor: "secondary" },
  corporatefare: { icon: "CorporateFare", defaultColor: "primary" },
  monetizationon: { icon: "MonetizationOn", defaultColor: "primary" },
  groupaddoutlined: { icon: "GroupAddOutlined", defaultColor: "primary" },
  peoplealtoutlined: { icon: "PeopleAltOutlined", defaultColor: "primary" },
  playcircle: { icon: "PlayCircle", defaultColor: "primary" },
  filecopyoutlined: { icon: "FileCopyOutlined", defaultColor: "primary" },
  visibility: { icon: "Visibility", defaultColor: "primary" }, //For Pop-up View
  editoutlined: { icon: "EditOutlined", defaultColor: "primary" }, // keep final version
};

const ActionIcon = ({
  purpose = "default",
  type = "",
  size = "18px",
  title = "",
  onClick,
  color,
  disabled,
  style,
  loading,
  ...props
}) => {
  const { icon: iconName, defaultColor } =
    typeConfig[type || purpose] || typeConfig.default;

  // Dynamically resolve the icon component from MUI
  const IconComponent = MuiIcons[iconName];

  if (!IconComponent) {
    console.warn(`Icon "${iconName}" not found in @mui/icons-material`);
    return null;
  }

  return (
    <LightTooltip
      title={
        title
        //  ||  `${type.charAt(0).toUpperCase() + type.slice(1)} Action`
      }
    >
      <IconButton
        onClick={onClick}
        disabled={disabled || loading}
        color={color || defaultColor}
        {...props}
        size={size}
      >
        <IconComponent style={{ fontSize: size }} />
        {loading && (
          <CircularProgress
            sx={{
              position: "absolute",
              zIndex: 1,
            }}
            color="inherit"
            size={20}
          />
        )}
      </IconButton>
    </LightTooltip>
  );
};

export default ActionIcon;
