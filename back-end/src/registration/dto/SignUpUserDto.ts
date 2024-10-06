export class CreateUserDto {
  readonly username: string;
  readonly email: string;
  readonly password: string;
  readonly userNationalId: string;
  readonly userPhoneNumber: string;
  readonly userGrade: string;
  readonly userClass: string;
}
