import { ApiProperty } from '@nestjs/swagger';


export class createTypeJobInterface {
  @ApiProperty({ description: 'type_job_name', type: String })
  type_job_name: string;
}
