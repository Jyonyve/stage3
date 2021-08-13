import TravelClubDto from './service/dto/TravelClubDto';
import MemberDto from './service/dto/MemberDto';
import ClubMembershipDto from './service/dto/ClubMembershipDto';
import ServiceLogicLycler from './logic/ServiceLogicLycler';
import MainMenu from './ui/menu/MainMenu';


const sampleClubDto = new TravelClubDto('test club', 'Travel club to the Java island.');
const sampleMemberDto = new MemberDto('test@test.co.kr', 'Minsoo Lee', '010-3321-1001');

const lycler = ServiceLogicLycler.shareInstance();
const clubService = lycler.createClubService();
const memberService = lycler.createMemberService();

clubService.register(sampleClubDto);
memberService.register(sampleMemberDto);
clubService.addMembership(new ClubMembershipDto('0', 'test@test.co.kr'));


const mainMenu = new MainMenu();

mainMenu.showMenu();
